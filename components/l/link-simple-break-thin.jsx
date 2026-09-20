import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.t_sewqbak {
  fill: currentColor;
  d: path("m212.79 116.77l-30.07 30.06a4 4 0 1 1-5.66-5.66l30.07-30.06a44 44 0 0 0-62.24-62.24l-30.07 30.06a4 4 0 0 1-5.65-5.66l30.06-30.06a52 52 0 0 1 73.56 73.56m-71.62 60.29l-30.06 30.07a44 44 0 0 1-62.24-62.24l30.06-30.06a4 4 0 0 0-5.66-5.66l-30.06 30.06a52 52 0 0 0 73.56 73.56l30.06-30.07a4 4 0 1 0-5.66-5.66");
}
</style><path class="t_sewqbak"/>`,
		"fallback": "ph:link-simple-break-thin",
	});
}

export default Component;
