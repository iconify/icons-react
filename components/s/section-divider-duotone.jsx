import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/p62is8b8f.css';
import '../../css/a/a0ovj0b1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="p62is8b8f"/><path class="a0ovj0b1u"/></g>`,
		"fallback": "stash:section-divider-duotone",
	});
}

export default Component;
