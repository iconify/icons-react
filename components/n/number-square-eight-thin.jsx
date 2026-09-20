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
		"content": `<style>.wcldf2bam {
  fill: currentColor;
  d: path("M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-69.1-84.31a28 28 0 1 0-29.8 0a32 32 0 1 0 29.8 0M108 100a20 20 0 1 1 20 20a20 20 0 0 1-20-20m20 76a24 24 0 1 1 24-24a24 24 0 0 1-24 24");
}
</style><path class="wcldf2bam"/>`,
		"fallback": "ph:number-square-eight-thin",
	});
}

export default Component;
