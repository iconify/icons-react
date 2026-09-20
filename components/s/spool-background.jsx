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

.gcy3f8b2b {
  fill: var(--svg-color--fff, #fff);
  d: path("m8.23 13.778l-1.382-2.525a1.466 1.466 0 0 1 .564-1.982l7.947-4.498c.102-.102.258-.373.102-.609l.28-.164l1.502 2.636c.151.422.218 1.4-.706 1.924c-.92.52-5.596 3.098-7.818 4.32c-.151.084-.418.347-.285.733c-.044.045-.16.134-.204.165m0 6.222l-1.382-2.524a1.466 1.466 0 0 1 .564-1.983l7.947-4.497c.102-.103.258-.374.102-.61l.28-.164l1.502 2.636c.151.422.218 1.4-.706 1.924c-.92.52-5.596 3.098-7.818 4.32c-.151.085-.418.347-.285.733c-.044.045-.16.134-.204.165");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.rz-b0ebdz {
  fill: var(--svg-color--24b4e6, #24b4e6);
  d: path("M24 0H0v24h24z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="rz-b0ebdz"/><path class="gcy3f8b2b"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:spool-background",
	});
}

export default Component;
