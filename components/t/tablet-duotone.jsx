import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsi-52frc.css';
import '../../css/k/k6b184-4c.css';
import '../../css/k/kv63i2wli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsi-52frc"/><path class="k6b184-4c"/><path class="kv63i2wli"/>`,
		"fallback": "stash:tablet-duotone",
	});
}

export default Component;
