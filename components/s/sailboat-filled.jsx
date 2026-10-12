import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlx4kgb-m.css';
import '../../css/o/ogjjes7pl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlx4kgb-m"/><path class="ogjjes7pl"/>`,
		"fallback": "lucide-extended:sailboat-filled",
	});
}

export default Component;
