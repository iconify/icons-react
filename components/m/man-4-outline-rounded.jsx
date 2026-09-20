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
		"content": `<style>.rjubu8b2d {
  fill: currentColor;
  d: path("M10.144 20.798L8.684 9.237q-.086-.727.399-1.27q.484-.544 1.211-.544h3.412q.727 0 1.211.543q.485.544.399 1.27l-1.46 11.562q-.05.298-.28.5q-.229.202-.528.202h-2.096q-.3 0-.528-.202q-.23-.202-.28-.5M12 5.808q-.698 0-1.195-.497t-.497-1.195t.497-1.196T12 2.423t1.195.497t.497 1.196q0 .698-.497 1.195T12 5.808");
}
</style><path class="rjubu8b2d"/>`,
		"fallback": "material-symbols-light:man-4-outline-rounded",
	});
}

export default Component;
