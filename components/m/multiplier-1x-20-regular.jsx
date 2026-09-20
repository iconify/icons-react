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
		"content": `<style>.pstv7pbwb {
  fill: currentColor;
  d: path("M8 6.5a.5.5 0 0 0-.898-.302a10 10 0 0 0-.22.306c-.33.472-.702 1.005-1.64 1.567a.5.5 0 1 0 .515.858c.545-.327.941-.66 1.243-.972V13.5a.5.5 0 1 0 1 0zm2.854 3.646a.5.5 0 0 0-.708.707L11.293 12l-1.147 1.146a.5.5 0 0 0 .708.707L12 12.707l1.146 1.146a.5.5 0 0 0 .708-.707L12.707 12l1.147-1.147a.5.5 0 0 0-.708-.707L12 11.293z");
}
</style><path class="pstv7pbwb"/>`,
		"fallback": "fluent:multiplier-1x-20-regular",
	});
}

export default Component;
