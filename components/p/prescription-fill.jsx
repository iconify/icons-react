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
		"content": `<style>.jyseqlb7l {
  fill: currentColor;
  d: path("M128 120H96V72h32a24 24 0 0 1 0 48m96-72v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-34.34 138.34L175.31 172l14.35-14.34a8 8 0 0 0-11.32-11.32L164 160.69l-26-26A40 40 0 0 0 128 56H88a8 8 0 0 0-8 8v112a8 8 0 0 0 16 0v-40h20.69l36 36l-14.35 14.34a8 8 0 0 0 11.32 11.32L164 183.31l14.34 14.35a8 8 0 0 0 11.32-11.32");
}
</style><path class="jyseqlb7l"/>`,
		"fallback": "ph:prescription-fill",
	});
}

export default Component;
