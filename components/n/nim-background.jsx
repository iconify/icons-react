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
		"content": `<style>.beaf9ac8r {
  fill: var(--svg-color--fff, #fff);
  d: path("M24 0H0v24h24z");
}

.ft5dv1b6b {
  fill: none;
}

.kxl526bhv {
  stop-color: var(--svg-color--e9b213, #e9b213);
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.w-p5s3h3w {
  stop-color: var(--svg-color--ec991c, #ec991c);
}

.yrfwgnbvz {
  d: path("m19.824 11.35l-3.337-5.704a1.33 1.33 0 0 0-1.15-.65H8.663a1.35 1.35 0 0 0-1.15.65L4.176 11.35a1.29 1.29 0 0 0 0 1.3l3.337 5.703a1.33 1.33 0 0 0 1.15.65h6.674a1.35 1.35 0 0 0 1.15-.65l3.337-5.703a1.29 1.29 0 0 0 0-1.3");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="beaf9ac8r"/><path fill="url(#SVGGljhFIgQ)" class="yrfwgnbvz"/></g><defs><radialGradient id="SVGGljhFIgQ" cx="0" cy="0" r="1" gradientTransform="matrix(16.0145 0 0 15.7643 16.037 18.823)" gradientUnits="userSpaceOnUse"><stop class="w-p5s3h3w"/><stop offset="1" class="kxl526bhv"/></radialGradient><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:nim-background",
	});
}

export default Component;
