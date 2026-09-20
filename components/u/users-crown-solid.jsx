import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3ry88brp.css';
import '../../css/a/a_iomqbzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3ry88brp"/><path class="a_iomqbzc"/>`,
		"fallback": "pixel:users-crown-solid",
	});
}

export default Component;
