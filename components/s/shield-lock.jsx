import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.v5gbi3ben {
  fill: currentColor;
  d: path("M12 20.962q-3.014-.895-5.007-3.651T5 11.1V5.692l7-2.615l7 2.615V11.1q0 3.454-1.993 6.21T12 20.963m-1.961-5.308h3.922q.344 0 .576-.232t.232-.576v-2.923q0-.343-.232-.575t-.576-.232h-.173v-1q0-.749-.51-1.26q-.51-.51-1.259-.51t-1.259.51t-.51 1.26v1h-.212q-.343 0-.575.232t-.232.575v2.923q0 .344.232.576t.576.232m.98-4.538v-1q0-.425.288-.713t.712-.288t.713.288t.287.713v1z");
}
</style><path class="v5gbi3ben"/>`,
		"fallback": "material-symbols-light:shield-lock",
	});
}

export default Component;
