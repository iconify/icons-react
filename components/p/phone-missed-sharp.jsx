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
		"content": `<style>.jmvwts82k {
  fill: currentColor;
  d: path("m4.064 19.866l-2.972-2.91l.635-.66q2.137-2.148 4.857-3.222T12 12t5.404 1.074t4.85 3.222l.654.66l-2.971 2.91l-3.437-2.597v-3.465q-1.142-.396-2.277-.6T12 13t-2.223.204t-2.277.6v3.465zm7.944-9.17L7.019 5.708V9h-1V4h5v1H7.727l4.275 4.275l5.323-5.323l.714.714z");
}
</style><path class="jmvwts82k"/>`,
		"fallback": "material-symbols-light:phone-missed-sharp",
	});
}

export default Component;
