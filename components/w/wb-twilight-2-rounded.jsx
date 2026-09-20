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
		"content": `<style>.t4dm92bnl {
  fill: currentColor;
  d: path("M3 20q-.425 0-.712-.288T2 19t.288-.712T3 18h18q.425 0 .713.288T22 19t-.288.713T21 20zm2-4q0-2.925 2.038-4.962T12 9t4.963 2.038T19 16z");
}
</style><path class="t4dm92bnl"/>`,
		"fallback": "material-symbols:wb-twilight-2-rounded",
	});
}

export default Component;
