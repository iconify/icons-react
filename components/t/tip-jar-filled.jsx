import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekc384f8f.css';
import '../../css/v/vgi-dbcnj.css';
import '../../css/b/b5atfim-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="ekc384f8f"/><path class="vgi-dbcnj"/><path clip-rule="evenodd" class="b5atfim-k"/>`,
		"fallback": "bitcoin-icons:tip-jar-filled",
	});
}

export default Component;
