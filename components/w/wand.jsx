import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0j6bc41l.css';
import '../../css/v/v4gx96bzq.css';
import '../../css/f/fsiiu5bpg.css';
import '../../css/o/oncf8bcca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0j6bc41l wm-k"/><path class="v4gx96bzq wm-k"/><path class="fsiiu5bpg wm-a"/><path class="oncf8bcca wm-a"/>`,
		"fallback": "withicons-bauhaus:wand",
	});
}

export default Component;
