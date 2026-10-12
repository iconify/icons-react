import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9p861bjm.css';
import '../../css/b/b2y5zk0fk.css';
import '../../css/j/jqs9sql0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9p861bjm"/><path clip-rule="evenodd" class="b2y5zk0fk"/><path class="jqs9sql0v"/>`,
		"fallback": "lucide-extended:user-cog-filled",
	});
}

export default Component;
