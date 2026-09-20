import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/da9f7744f.css';
import '../../css/s/sj5wtjbpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="da9f7744f"/><path class="sj5wtjbpp"/>`,
		"fallback": "octicon:repo-delete-24",
	});
}

export default Component;
