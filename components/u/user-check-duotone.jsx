import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ow15xdb1e.css';
import '../../css/e/eeg6scbqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ow15xdb1e"/><path class="eeg6scbqm"/>`,
		"fallback": "stash:user-check-duotone",
	});
}

export default Component;
