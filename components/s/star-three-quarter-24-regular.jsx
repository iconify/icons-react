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
		"content": `<style>.ojjeolb5p {
  fill: currentColor;
  d: path("M13.211 3.102L15 6.727v.004l.567 1.149l5.273.766c1.107.16 1.549 1.522.748 2.303l-3.816 3.719l.901 5.25c.19 1.104-.968 1.945-1.959 1.424L12 18.863l-4.715 2.479a1.34 1.34 0 0 1-.629.158c-.787 0-1.481-.708-1.331-1.581l.9-5.251l-3.815-3.72c-.801-.78-.359-2.141.748-2.302L8.43 7.88l2.358-4.778c.248-.502.73-.753 1.211-.752c.482 0 .964.25 1.212.752M15 9.284v9.462l2.143 1.127l-.862-5.03a1.35 1.35 0 0 1 .388-1.194l3.654-3.562l-5.05-.734a1.4 1.4 0 0 1-.273-.07");
}
</style><path class="ojjeolb5p"/>`,
		"fallback": "fluent:star-three-quarter-24-regular",
	});
}

export default Component;
