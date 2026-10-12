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
		"content": `<style>.oaj-o48zx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4.5h5.5V10h-5.5m0 4h5.5v5.5h-5.5m5.5-12.25h4.5v9.5h-4.5m4.5-4.75h2m4.15-1.93l.41.89q.15.32.49.36l.98.12q.35.04.09.28l-.72.66q-.26.24-.19.58l.19.97q.07.34-.24.17l-.85-.48q-.31-.17-.62 0l-.85.48q-.31.17-.24-.17l.19-.97q.07-.34-.19-.58l-.72-.66q-.26-.24.09-.28l.98-.12q.34-.04.49-.36l.41-.89q.15-.32.3 0");
}
</style><path class="oaj-o48zx"/>`,
		"fallback": "iconoven:tournament-bracket",
	});
}

export default Component;
