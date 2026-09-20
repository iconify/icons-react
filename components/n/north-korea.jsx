import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4wx3obrc.css';
import '../../css/g/gh150gboq.css';
import '../../css/h/hvxlkhblw.css';
import '../../css/a/apbf24dvd.css';
import '../../css/k/kq2tyibcm.css';
import '../../css/s/snp287xku.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4wx3obrc"/><path class="gh150gboq"/><path class="hvxlkhblw"/><path class="apbf24dvd"/><path class="kq2tyibcm"/><path class="snp287xku"/>`,
		"fallback": "streamline-emojis:north-korea",
	});
}

export default Component;
