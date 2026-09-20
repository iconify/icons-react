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
		"content": `<style>.q9awmdbvx {
  fill: currentColor;
  d: path("m8 20l-6-8l6-8h14v16zm1-7h2v-2H9zm3.5 0h2v-2h-2zm3.5 0h2v-2h-2z");
}
</style><path class="q9awmdbvx"/>`,
		"fallback": "material-symbols:more-sharp",
	});
}

export default Component;
