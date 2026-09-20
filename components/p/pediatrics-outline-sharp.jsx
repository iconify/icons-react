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
		"content": `<style>.nvqgxcehq {
  fill: currentColor;
  d: path("M7 7V5h4V2h2v3h4v2zm0 15V11q0-1.25.875-2.125T10 8h4q1.25 0 2.125.875T17 11v11zm2-2h6v-9q0-.425-.288-.712T14 10h-4q-.425 0-.712.288T9 11v1h3v2H9v2h3v2H9zm0 0V10z");
}
</style><path class="nvqgxcehq"/>`,
		"fallback": "material-symbols:pediatrics-outline-sharp",
	});
}

export default Component;
