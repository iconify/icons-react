import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.b41azwb3z {
  fill: currentColor;
  d: path("M6 5v4.982q.126-.165.274-.312L10 5.944V5zm-2.5 6A1.5 1.5 0 0 1 2 9.5v-3A1.5 1.5 0 0 1 3.5 5H5v6zm3.48-.623l4.83-4.83a1.87 1.87 0 1 1 2.644 2.646l-4.83 4.829a2.2 2.2 0 0 1-1.02.578l-1.498.374a.89.89 0 0 1-1.079-1.078l.375-1.498a2.2 2.2 0 0 1 .578-1.02");
}
</style><path class="b41azwb3z"/>`,
		"fallback": "fluent:table-cell-edit-16-filled",
	});
}

export default Component;
