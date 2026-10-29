import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iymf6qb3j.css';
import '../../css/v/v5xrdcb0l.css';
import '../../css/q/qnd7fcbei.css';
import '../../css/n/nnp21bc0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iymf6qb3j wm-k"/><path class="v5xrdcb0l wm-k"/><path class="qnd7fcbei wm-k"/><path class="nnp21bc0o wm-a"/>`,
		"fallback": "withicons-bauhaus:mouse",
	});
}

export default Component;
