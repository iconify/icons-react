import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bujcfabcl.css';
import '../../css/p/p68_n_bch.css';
import '../../css/r/riwp_rwvj.css';
import '../../css/u/u04jombws.css';
import '../../css/x/x5rsn2cfn.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bujcfabcl"/><path class="p68_n_bch"/><path class="riwp_rwvj"/><path class="u04jombws"/><path class="x5rsn2cfn"/>`,
		"fallback": "devicon:unity-wordmark",
	});
}

export default Component;
