import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vc9e3pbhn {
  fill: currentColor;
  d: path("M1.146 1.146a.5.5 0 0 1 .708 0l9 9a.5.5 0 0 1-.707.707l-.985-.984A4.97 4.97 0 0 1 6 11a5 5 0 0 1-3.871-8.164l-.983-.982a.5.5 0 0 1 0-.708m1.695 2.402A4 4 0 0 0 6 10c.923 0 1.772-.316 2.45-.843L7.377 8.085C7.03 8.338 6.558 8.5 6 8.5c-1.183 0-2-.713-2-1.53v-.16c0-.203.087-.4.217-.545A.75.75 0 0 1 4.775 6h.518zM6 1a5 5 0 0 1 4.434 7.31l-.75-.75a4 4 0 0 0-5.245-5.245l-.75-.75A5 5 0 0 1 6 1m0 2a1 1 0 0 1 .765 1.642L5.357 3.234A1 1 0 0 1 6 3");
}
</style><path class="vc9e3pbhn"/>`,
		"fallback": "fluent:person-circle-off-12-regular",
	});
}

export default Component;
