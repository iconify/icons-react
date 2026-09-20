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
		"content": `<style>.memjfnbwz {
  fill: currentColor;
  d: path("m18.077 23.23l-2.5-2.5v-1.5l-7.408-7.407q-.225.05-.392.075l-.43.064v-1.047q1.192-.103 2.684-.883t2.196-1.54l1.323-1.396q.229-.298.56-.447t.717-.149q.662 0 1.129.467t.467 1.13V14q0 .708-.305 1.245t-.768.867l-2.273-2.262V9.07q-.904.886-1.873 1.476q-.97.59-1.927.923l7.03 7.031h1.5l2.5 2.5zM5.462 19.847l-.808-.807l4.635-4.635l2.096 2.096H8.808zm8.472-15.01Q13.5 4.403 13.5 3.77t.434-1.066T15 2.269t1.066.434t.434 1.066t-.434 1.067T15 5.269t-1.066-.433");
}
</style><path class="memjfnbwz"/>`,
		"fallback": "material-symbols-light:rowing-outline-sharp",
	});
}

export default Component;
