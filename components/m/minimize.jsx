import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-tys13rn.css';
import '../../css/n/ne7bzbcsu.css';
import '../../css/u/ui6r1kbdd.css';
import '../../css/w/wkvfpv47j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-tys13rn wm-k"/><path class="ne7bzbcsu wm-a"/><path class="ui6r1kbdd wm-k"/><path class="wkvfpv47j wm-a"/>`,
		"fallback": "withicons-bauhaus:minimize",
	});
}

export default Component;
