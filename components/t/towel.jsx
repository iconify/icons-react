import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqznn1ydc.css';
import '../../css/f/fzjkvfbqm.css';
import '../../css/l/lwcbfpoys.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGoFPYbb5n"><g class="wqznn1ydc"><path class="fzjkvfbqm"/><path class="lwcbfpoys"/></g></mask></defs><path mask="url(#SVGoFPYbb5n)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:towel",
	});
}

export default Component;
