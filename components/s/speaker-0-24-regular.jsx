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
		"content": `<style>.regumnbsx {
  fill: currentColor;
  d: path("M14.704 3.44c.191.226.296.512.296.808V19.75a1.25 1.25 0 0 1-2.058.954l-4.967-4.206H4.25A2.25 2.25 0 0 1 2 14.248v-4.5a2.25 2.25 0 0 1 2.25-2.25h3.725l4.968-4.204a1.25 1.25 0 0 1 1.761.147M13.5 4.788l-4.975 4.21H4.25a.75.75 0 0 0-.75.75v4.5c0 .415.336.75.75.75h4.275L13.5 19.21z");
}
</style><path class="regumnbsx"/>`,
		"fallback": "fluent:speaker-0-24-regular",
	});
}

export default Component;
