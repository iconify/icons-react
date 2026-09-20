import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aunpmjb5a.css';
import '../../css/u/ukoyhjbde.css';
import '../../css/y/yyq2ah3cx.css';
import '../../css/l/lurqadlpz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aunpmjb5a"/><path class="ukoyhjbde"/><path class="yyq2ah3cx"/><path class="lurqadlpz"/>`,
		"fallback": "selfhst:microsoft-clipchamp-light",
	});
}

export default Component;
