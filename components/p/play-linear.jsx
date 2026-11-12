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
		"content": `<style>.uhpn52zsq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5.0329L3 18.9671C3 21.2763 5.53435 22.736 7.59662 21.6145L20.4086 14.6474C22.5305 13.4935 22.5305 10.5065 20.4086 9.35258L7.59661 2.38548C5.53435 1.26402 3 2.72368 3 5.0329Z");
}
</style><path class="uhpn52zsq"/>`,
		"fallback": "solar:play-linear",
	});
}

export default Component;
