import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egxi5i7oe.css';
import '../../css/e/e8uoipb2s.css';
import '../../css/i/i71zrdbzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="egxi5i7oe"/><path class="e8uoipb2s"/><path clip-rule="evenodd" class="i71zrdbzb"/>`,
		"fallback": "stash:paper-clock",
	});
}

export default Component;
