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
		"content": `<style>.d1nkavbvp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.125 4.5l.507.901a1.5 1.5 0 0 0 1.807.679l.936-.33a1.25 1.25 0 0 1 1.636 1.45l-.271 1.221a1.5 1.5 0 0 0 .72 1.628l.79.451a.901.901 0 0 1-.162 1.637l-1.379.46a1.444 1.444 0 0 0-.959 1.653a.766.766 0 0 1-.971.884l-3.348-1.005a1.5 1.5 0 0 0-.862 0l-3.348 1.005a.766.766 0 0 1-.971-.884a1.444 1.444 0 0 0-.959-1.653l-1.379-.46A.901.901 0 0 1 4.75 10.5l.79-.451a1.5 1.5 0 0 0 .72-1.628L5.989 7.2a1.25 1.25 0 0 1 1.636-1.45l.936.33a1.5 1.5 0 0 0 1.807-.679l.507-.901a1.291 1.291 0 0 1 2.25 0M12 14v7.5");
}
</style><path class="d1nkavbvp"/>`,
		"fallback": "uix:maple-tree",
	});
}

export default Component;
