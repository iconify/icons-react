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
		"content": `<style>.sl9bxot1a {
  fill: currentColor;
  d: path("M9 2h10a3 3 0 0 1 3 3v10a1 1 0 0 1-2 0V5a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1a1 1 0 0 1-2 0a3 3 0 0 1 3-3M4.482 9.068l-.775-.776A3 3 0 0 1 5 8h10c.448 0 .889.099 1.293.292l-5 5.001c-.313.312-.825.707-1.293.707s-.98-.395-1.293-.707Zm-2.19.639l5.001 5C8.008 15.422 8.961 16 10 16s1.992-.578 2.707-1.293l5.001-5c.193.404.292.845.292 1.293v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-8c0-.448.099-.889.292-1.293");
}
</style><path class="sl9bxot1a"/>`,
		"fallback": "coolicons:mails-fill",
	});
}

export default Component;
