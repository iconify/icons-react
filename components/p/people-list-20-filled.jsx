import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qi8fh5bvv {
  fill: currentColor;
  d: path("M6.75 10a3.25 3.25 0 1 0 0-6.5a3.25 3.25 0 0 0 0 6.5m3.75 2.5c0-.481.227-.91.58-1.184A2 2 0 0 0 10 11H3.5a2 2 0 0 0-2 2s0 4 5.25 4c1.953 0 3.18-.554 3.95-1.25q.078-.135.182-.25a1.5 1.5 0 0 1-.382-1c0-.384.144-.735.382-1a1.5 1.5 0 0 1-.382-1m6.5-5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M12 12a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1z");
}
</style><path class="qi8fh5bvv"/>`,
		"fallback": "fluent:people-list-20-filled",
	});
}

export default Component;
