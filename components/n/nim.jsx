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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.kxl526bhv {
  stop-color: var(--svg-color--e9b213, #e9b213);
}

.u00eavb5b {
  d: path("M20.802 11.269L17.05 4.853a1.5 1.5 0 0 0-1.295-.732H8.246a1.52 1.52 0 0 0-1.294.732l-3.754 6.416a1.45 1.45 0 0 0 0 1.463l3.754 6.416a1.49 1.49 0 0 0 1.294.732h7.508a1.52 1.52 0 0 0 1.295-.732l3.753-6.416a1.45 1.45 0 0 0 0-1.463");
}

.w-p5s3h3w {
  stop-color: var(--svg-color--ec991c, #ec991c);
}
</style><g class="ft5dv1b6b"><path fill="url(#SVGSNUOeEEG)" class="u00eavb5b"/><defs><radialGradient id="SVGSNUOeEEG" cx="0" cy="0" r="1" gradientTransform="matrix(18.0163 0 0 17.7349 16.542 19.677)" gradientUnits="userSpaceOnUse"><stop class="w-p5s3h3w"/><stop offset="1" class="kxl526bhv"/></radialGradient></defs></g>`,
		"fallback": "token-branded:nim",
	});
}

export default Component;
