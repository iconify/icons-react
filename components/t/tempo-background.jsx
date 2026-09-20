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

.p6psklbkq {
  fill: var(--svg-color--000, #000);
  fill-rule: evenodd;
  d: path("M5.857 5a.46.46 0 0 0-.437.325L4.013 9.671a.25.25 0 0 0 .23.33h4.086c.165 0 .282.166.23.328l-3.025 9.342a.25.25 0 0 0 .23.329h4.382a.46.46 0 0 0 .437-.325l3.028-9.35a.46.46 0 0 1 .437-.325h4.095a.46.46 0 0 0 .438-.325l1.406-4.346a.25.25 0 0 0-.23-.329z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="beaf9ac8r"/><path clip-rule="evenodd" class="p6psklbkq"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:tempo-background",
	});
}

export default Component;
