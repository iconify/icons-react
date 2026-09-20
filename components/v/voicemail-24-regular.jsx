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
		"content": `<style>.iv27yibhc {
  fill: currentColor;
  d: path("M19.749 4a2.25 2.25 0 0 1 2.25 2.25v11.505a2.25 2.25 0 0 1-2.25 2.25H4.25A2.25 2.25 0 0 1 2 17.755V6.25A2.25 2.25 0 0 1 4.25 4zm0 1.5H4.25a.75.75 0 0 0-.75.75v11.505c0 .414.336.75.75.75h15.499a.75.75 0 0 0 .75-.75V6.25a.75.75 0 0 0-.75-.75M8 9h7.748l.082.004L16 9a3 3 0 1 1-2.599 1.5H10.6a3 3 0 1 1-2.775-1.495zm0 1.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m8 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3");
}
</style><path class="iv27yibhc"/>`,
		"fallback": "fluent:voicemail-24-regular",
	});
}

export default Component;
