import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xj8_-65to.css';
import '../../css/t/tig70s96w.css';
import '../../css/c/cf2gljolc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="xj8_-65to"/><path class="tig70s96w"/><path class="cf2gljolc"/>`,
		"fallback": "selfhst:shelfmark",
	});
}

export default Component;
