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
		"content": `<style>.aum7sfbaa {
  fill: var(--svg-color--005cc7, #005cc7);
}

.ibougxfxt {
  d: path("M15.375 17.063V16.5h-2.812v4.483A9 9 0 0 0 21 12h-4.5v3.375h.563v1.688zm-8.438-1.688H7.5V12H3a9 9 0 0 0 9 9v-4.5H8.625v.563H6.937z");
}

.li7xuzyeq {
  d: path("M3.017 11.437A9 9 0 0 1 12 3v4.5h3.375v-.563h1.687v1.688h-1.687v-.563H12V12h3.937v3.375h-.562v.562h-6.75v-.562h-.563v-6.75h.563V6.937H6.937v1.688H7.5v2.812z");
}
</style><g class="aum7sfbaa"><path class="li7xuzyeq"/><path class="ibougxfxt"/></g>`,
		"fallback": "token-branded:prq",
	});
}

export default Component;
