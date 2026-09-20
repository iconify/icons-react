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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.eqq-ofbsn {
  d: path("M232 208h-18.31L153.42 34.75A16 16 0 0 0 138.31 24h-20.62a16 16 0 0 0-15.11 10.74L42.31 208H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16M117.69 40h20.62L155 88h-54Zm-22.26 64h65.14l16.7 48H78.73ZM59.25 208l13.92-40h109.66l13.92 40Z");
}

.gu0ourlyo {
  d: path("M188.52 160h-121l22.22-64h76.52Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="gu0ourlyo"/><path class="eqq-ofbsn"/></g>`,
		"fallback": "ph:traffic-cone-duotone",
	});
}

export default Component;
