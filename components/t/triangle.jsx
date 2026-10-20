import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjagb0hmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjagb0hmn"/>`,
		"fallback": "vadivam:triangle",
	});
}

export default Component;
