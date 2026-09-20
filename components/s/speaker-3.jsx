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
		"content": `<style>.jmw1eeq_a {
  fill: currentColor;
  d: path("M8.692 21v-1H7.346q-.98 0-1.673-.702q-.692-.702-.692-1.682V5.385q0-.981.692-1.683Q6.366 3 7.346 3h9.289q.98 0 1.673.702q.692.702.692 1.683v12.23q0 .981-.692 1.683T16.634 20H15.27v1z");
}
</style><path class="jmw1eeq_a"/>`,
		"fallback": "material-symbols-light:speaker-3",
	});
}

export default Component;
