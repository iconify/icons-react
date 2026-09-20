import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bva81kbyz {
  fill: currentColor;
  d: path("M7.904 6.332a.7.7 0 0 1 1.193 0l.051.102l.255.62a1 1 0 0 0 .544.545l.62.254a.7.7 0 0 1 0 1.295l-.62.255a1 1 0 0 0-.544.545l-.255.62a.7.7 0 0 1-1.295 0l-.254-.62a1 1 0 0 0-.545-.545l-.62-.255a.7.7 0 0 1 0-1.295l.62-.254a1 1 0 0 0 .545-.545l.254-.62zM3.818 1.379c.328-.542 1.166-.503 1.421.116l.501 1.219c.102.247.298.443.545.545l1.219.5a.8.8 0 0 1 0 1.48l-1.219.501a1 1 0 0 0-.545.545l-.5 1.219a.8.8 0 0 1-1.48 0l-.501-1.219a1 1 0 0 0-.545-.545l-1.219-.5a.8.8 0 0 1 0-1.48l1.219-.501c.247-.102.443-.298.545-.545l.5-1.219z");
}
</style><path class="bva81kbyz"/>`,
		"fallback": "fluent:sparkle-12-filled",
	});
}

export default Component;
