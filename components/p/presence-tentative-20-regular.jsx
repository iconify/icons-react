import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qghdisbjh {
  fill: currentColor;
  d: path("M8.946.055a9.96 9.96 0 0 0-6.021 2.874A9.96 9.96 0 0 0 .05 8.949zM.187 11.953L11.95.19a10 10 0 0 1 2.355.781L.968 14.308a10 10 0 0 1-.78-2.355m1.991 4.284A10 10 0 0 0 3.76 17.82L17.815 3.764a10 10 0 0 0-1.582-1.582zM19.024 5.694L5.69 19.03c.757.36 1.55.62 2.359.78L19.805 8.054a10 10 0 0 0-.78-2.359m.916 5.364l-8.886 8.886a9.96 9.96 0 0 0 6.013-2.873a9.96 9.96 0 0 0 2.873-6.013");
}
</style><path class="qghdisbjh"/>`,
		"fallback": "fluent:presence-tentative-20-regular",
	});
}

export default Component;
