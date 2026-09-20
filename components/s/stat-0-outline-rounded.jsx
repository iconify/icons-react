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
		"content": `<style>.nsa-43bbc {
  fill: currentColor;
  d: path("m10.864 16.44l-3.305-3.303q-.242-.243-.353-.54q-.112-.299-.112-.597t.112-.596t.353-.54l3.305-3.304q.242-.243.54-.354q.298-.112.596-.112t.596.112t.54.354l3.305 3.304q.242.242.353.54q.112.298.112.596t-.112.596t-.353.54l-3.304 3.305q-.243.242-.54.353q-.299.112-.597.112t-.596-.112t-.54-.353m1.578-.733l3.266-3.266q.173-.173.173-.442t-.173-.442l-3.266-3.266Q12.27 8.12 12 8.12t-.442.173l-3.266 3.266q-.173.173-.173.442t.173.442l3.266 3.266q.173.173.442.173t.442-.173M12 12");
}
</style><path class="nsa-43bbc"/>`,
		"fallback": "material-symbols-light:stat-0-outline-rounded",
	});
}

export default Component;
