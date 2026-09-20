import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5lfbgmeg.css';
import '../../css/c/cqafvmdbv.css';
import '../../css/w/whsz71boo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5lfbgmeg"/><path class="cqafvmdbv"/><path clip-rule="evenodd" class="whsz71boo"/>`,
		"fallback": "ix:screen-duplicate",
	});
}

export default Component;
