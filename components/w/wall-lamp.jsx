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
		"content": `<style>.fq53dwy_i {
  fill: currentColor;
  d: path("M3.73 20v-5h1v5zm2.77-2v-1H11q.617 0 1.059-.441q.441-.442.441-1.059V13H8.077q-.404 0-.646-.33t-.112-.714l1.9-6.385q.081-.267.292-.419Q9.723 5 9.996 5h6.008q.273 0 .484.152q.212.152.293.42l1.9 6.384q.13.385-.112.714t-.646.33H13.5v2.5q0 1.039-.73 1.77T11 18z");
}
</style><path class="fq53dwy_i"/>`,
		"fallback": "material-symbols-light:wall-lamp",
	});
}

export default Component;
