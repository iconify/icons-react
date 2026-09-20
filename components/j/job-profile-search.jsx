import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/izwxg58wt.css';
import '../../css/e/exa3jlbqw.css';
import '../../css/d/de59gb_vo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="izwxg58wt"/><path class="exa3jlbqw"/><path class="de59gb_vo"/></g>`,
		"fallback": "streamline-freehand-color:job-profile-search",
	});
}

export default Component;
