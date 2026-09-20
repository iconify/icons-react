import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.d-hvye0xf {
  fill: var(--svg-color--662113, #662113);
  d: path("M8.178 9.534c-.43.448-1.114.489-1.527.093c-3.208-3.079-3.918-7.544-3.946-7.776c-.074-.586.348-1.157.939-1.278c.592-.121 1.131.257 1.205.842c.006.05.657 3.997 3.359 6.59c.413.397.4 1.081-.03 1.529");
}

.p8e4su3tr {
  fill: var(--svg-color--a6d388, #a6d388);
  d: path("M7.681 9.097c1.587-3.151 7.698-1.916 11.958 2.171c2.697 2.586 8.056 1.498 11.498 4.804c3.493 3.354 3.259 9.361-3.053 15.767C23 37 16 37 11.835 33.384c-4.388-3.811-2.476-8.61-4.412-13.585S3.1 9.375 7.681 9.097");
}
</style><path class="p8e4su3tr"/><path class="d-hvye0xf"/>`,
		"fallback": "twemoji:pear",
	});
}

export default Component;
