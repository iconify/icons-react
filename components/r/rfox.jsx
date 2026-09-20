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

.on13jubrr {
  stop-color: var(--svg-color--ed1c24, #ed1c24);
}

.rlqg8eblf {
  stop-color: var(--svg-color--af0607, #af0607);
}

.ueu4h3bwt {
  fill-rule: evenodd;
  d: path("M4.452 10.38V3L8.11 6.774zm10.243-2.735H9.318l2.74 11.473zM8.55 7.68L11.796 21l-6.779-9.86zm6.9 0L12.204 21l6.779-9.86zm4.099 2.7V3L15.89 6.774z");
}
</style><g class="ft5dv1b6b"><path fill="url(#SVGmkOQHbOz)" clip-rule="evenodd" class="ueu4h3bwt"/><defs><linearGradient id="SVGmkOQHbOz" x1="4.573" x2="19.264" y1="10.769" y2="10.769" gradientUnits="userSpaceOnUse"><stop class="rlqg8eblf"/><stop offset=".495" class="on13jubrr"/></linearGradient></defs></g>`,
		"fallback": "token-branded:rfox",
	});
}

export default Component;
